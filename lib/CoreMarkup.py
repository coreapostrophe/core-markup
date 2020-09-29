from lib.Headers import Headers
from lib.Question import Question

class CoreMarkup:
    def __init__(self, file):
        self.file = file
        self.lines = file.readlines()
        self.headers = Headers()
        self.questions: Question = self.transcribe(self.lines)

    def transcribe(self, lines: list)->list:
        masterList = []
        for i in range(0,len(lines)):
            if lines[i][0] == "#":
                count = -1
                for char in lines[i]:
                    if char == "#":
                        count += 1
                    else:
                        break
                for _ in range(count, self.headers.length()):
                    self.headers.pop()
                self.headers.add(lines[i][(count+2):])
                continue
            elif lines[i][0] in ["*","$"]:
                question = Question(lines[i][1:])
                question.setHeaders(self.headers)
                details = []
                if lines[i][0] == "$":
                    question.isEnumerable(True)
                for j in range(i+1, len(lines)):
                    if lines[j][0] == "-":
                        details.append(lines[j][1:-2])
                    else:
                        break
                question.setDetails(self.transcribe(details))
                masterList.append(question)
            elif lines[i][0] not in ["","\n","-"]:
                masterList.append(lines[i])
        return masterList

    def getQuestions(self):
        return self.questions