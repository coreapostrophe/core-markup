import sys
import json
from antlr4 import *

sys.path.insert(1, '../antlr/python/')

# Load ANTLR-generated dependencies
from CoreMarkupLexer import CoreMarkupLexer
from CoreMarkupParser import CoreMarkupParser
from CoreMarkupParserListener import CoreMarkupParserListener


class CoreMarkupExporter(CoreMarkupParserListener):

    # Symbol constants
    SYMBOL_HEADER = "#"
    SYMBOL_DETAIL = "-"
    SYMBOL_QUESTION = "*"
    SYMBOL_ENUM_QUESTION = "$"
    SYMBOL_OPTION = ";"

    def __init__(self):
        self.headers = []
        self.current_root_index = -1
        self.indices = {}  # Indices lookup table
        self.questions = []
        self.options = {}

    # Enter a parse tree produced by CoreMarkupParser#option.
    def enterOption(self, ctx: CoreMarkupParser.OptionContext):
        key_text = ctx.KEY().getText()
        value_text = ctx.VALUE().getText()
        self.options[key_text] = value_text.strip('"').replace("\\", "")

    # Enter a parse tree produced by CoreMarkupParser#header.
    def enterHeader(self, ctx: CoreMarkupParser.HeaderContext):
        header_tag = ctx.HEADER_TAG().getText()
        curr_header_level = len(header_tag)
        label = ctx.label().getText().strip()

        if len(self.headers) > 0:
            last_header_level = self.headers[-1]["level"]  # stack peek
            if curr_header_level == last_header_level:
                self.headers.pop()
            elif curr_header_level < last_header_level:
                # slice from 0 to curr_header_level - 1
                self.headers = self.headers[: curr_header_level - 1]

        self.headers.append({"level": curr_header_level, "label": label})

    # Enter a parse tree produced by CoreMarkupParser#question.
    def enterQuestion(self, ctx: CoreMarkupParser.QuestionContext):
        label = ctx.label().getText().strip()
        enumerable = self.is_enumerable(ctx.QUESTION_TAG().getText())

        details = [{"label": d.label().getText().strip()} for d in ctx.detail()]
        headers = [h["label"] for h in self.headers]

        question = {
            "root": True,
            "headers": headers,
            "concept": label,
            "enumerable": enumerable,
            "details": details,
        }

        # Append to questions array and become the current root
        self.questions.append(question)
        self.current_root_index = len(self.questions) - 1
        self.indices[1] = self.current_root_index

    # Exit a parse tree produced by CoreMarkupParser#question.
    def exitQuestion(self, ctx: CoreMarkupParser.QuestionContext):
        # Clear indices
        self.indices = {}

    # Enter a parse tree produced by CoreMarkupParser#question_detail.
    def enterQuestion_detail(self, ctx: CoreMarkupParser.Question_detailContext):
        qd_tag_text = ctx.QUESTION_DETAIL_TAG().getText()
        question_level = len(qd_tag_text)

        # Get previous question
        prev = self.get_question_at(question_level - 1)
        next_index = len(self.questions)

        question_obj = {"next": next_index}
        prev["details"].append(question_obj)

        enumerable = self.is_enumerable(qd_tag_text[-1])
        details = []
        for d in ctx.detail():
            # Determine detail level
            d_tag_text = d.DETAIL_TAG().getText()
            detail_level = len(d_tag_text)

            # Construct detail object
            detail_obj = {"label": d.label().getText().strip()}

            if detail_level == question_level:
                # Append as usual
                details.append(detail_obj)
            else:
                # Use lookup table to find correct parent
                parent = self.get_question_at(detail_level)
                parent["details"].append(detail_obj)

        # Construct question detail
        label = ctx.label().getText().strip()
        question_detail = {
            "root": False,
            "concept": label,
            "enumerable": enumerable,
            "details": details,
            "parent": self.indices[1],  # Get level 1 (the root question)
        }

        # Append child QD to the array and update indices lookup table
        self.questions.append(question_detail)
        self.indices[question_level] = next_index

    def get_question_at(self, level):
        index = self.indices[level]
        return self.questions[index]

    def get_current_root_question(self):
        return self.questions[self.current_root_index]

    def is_enumerable(self, tag):
        return tag == CoreMarkupExporter.SYMBOL_ENUM_QUESTION

    def get_json(self):
        body = self.options
        body["cards"] = self.questions
        return json.dumps(body)


def main(argv):
    # Provide Sample.cmu file
    input_stream = FileStream(argv[1])
    lexer = CoreMarkupLexer(input_stream)
    stream = CommonTokenStream(lexer)
    parser = CoreMarkupParser(stream)
    tree = parser.cmu()

    # Invoke listeners
    consumer = CoreMarkupExporter()
    walker = ParseTreeWalker()
    walker.walk(consumer, tree)
    print(consumer.get_json())


if __name__ == "__main__":
    main(sys.argv)