class CoreMarkup:
    HEADER_CHAR = "#"
    QUESTION_CHAR = "*"
    ENM_QUESTION_CHAR = "$"
    DETAIL_CHAR = "-"
    # CORE MARKUP 2019 「CoreApostrophe」
    # The lines attribute corresponds to every line in the text file
    def __init__(self):
        self.lines = []
        self.current_headers: str = []
        self.questions: Question = []

    def set_lines(self, lines: list):
        self.lines = lines

    def set_parse_lines(self, lines: list):
        self.questions = self.transcribe(lines)

    def parse_lines(self):
        self.questions = self.transcribe(self.lines)

    # Main Function that identifies core markup elements (e.g. Questions, Headers, etc.)
    def transcribe(self, lines: list)->list:
        master_list = []
        line_count = 0
        while(line_count < len(lines)):
            init_char = lines[line_count][0]
            if(init_char == self.HEADER_CHAR):
                h_depth = -1
                for char in lines[line_count]:
                    if char == self.HEADER_CHAR:
                        h_depth += 1
                    else:
                        break
                header = lines[line_count][h_depth+1:]
                for _ in range(h_depth, len(self.current_headers)):
                    self.current_headers.pop()
                self.current_headers.append(header)
            elif init_char in [self.QUESTION_CHAR, self.ENM_QUESTION_CHAR]:
                question = Question(lines[line_count][1:])
                question.set_headers(self.current_headers.copy())
                if init_char == "$":
                    question.is_enumerable(True)
                details = []
                line_count += 1
                while(lines[line_count][0] == "-"):
                    details.append(lines[line_count][1:])
                    line_count += 1
                    if not(line_count < len(lines)):
                        break
                question.set_details(self.transcribe(details))
                master_list.append(question)
            elif init_char not in ["","\n","-"]:
                master_list.append(lines[line_count])
            line_count += 1
        return master_list

    def get_questions(self):
        return self.questions

class Question:
    def __init__(self, main_concept : str):
        self.enumerable = False
        self.mainConcept = main_concept
        self.headers = []
        self.details = []

    def is_enumerable(self, *args):
        if args != ():
            self.enumerable = args[0]
        return self.enumerable
    
    def add_detail(self, detail:str):
        self.details.append(detail)

    def set_headers(self, headers :list):
        self.headers = headers

    def set_details(self, details: list):
        self.details = details

    def get_main_concept(self):
        return self.mainConcept

    def get_details(self)->list:
        return self.details

    def get_headers(self)->list:
        return self.headers