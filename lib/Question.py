from lib.Headers import Headers

class Question:
    def __init__(self, mainConcept : str):
        self.enumerable = False
        self.mainConcept = mainConcept
        self.headers : Headers
        self.details = []

    def isEnumerable(self, value: bool):
        self.enumerable = value
    
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