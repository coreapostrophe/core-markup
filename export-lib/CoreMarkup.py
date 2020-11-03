class CoreMarkup:
    # CORE MARKUP 2019 「CoreApostrophe」
    # The lines attribute corresponds to every line in the text file
    def __init__(self, lines: list):
        self.lines = lines
        self.headers = Headers()
        self.questions: Question = self.transcribe(self.lines)

    # Main Function that identifies core markup elements (e.g. Questions, Headers, etc.)
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
                        details.append(lines[j][1:])
                    else:
                        break
                question.setDetails(self.transcribe(details))
                masterList.append(question)
            elif lines[i][0] not in ["","\n","-"]:
                masterList.append(lines[i])
        return masterList

    def getQuestions(self):
        return self.questions

class Question:
    def __init__(self, mainConcept : str):
        self.enumerable = False
        self.mainConcept = mainConcept
        self.headers : Headers
        self.details = []

    def isEnumerable(self, *args):
        if args != ():
            self.enumerable = args[0]
        return self.enumerable
    
    def addDetail(self, detail:str):
        self.details.append(detail)

    def setHeaders(self, header: Headers):
        self.headers = header

    def setDetails(self, details: list):
        self.details = details

    def getMainConcept(self):
        return self.mainConcept

    def getDetails(self)->list:
        return self.details

class Headers:
    def __init__(self, *args : str):
        self.list = []
        for header in args:
            self.list.append(header)
    
    def add(self, header: str):
        self.list.append(header)
    
    def pop(self):
        self.list.pop(len(self.list)-1)

    def length(self)->int:
        return len(self.list)