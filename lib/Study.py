import random
import textwrap
from lib.Module import Module
from lib.Question import Question
from lib.Environment import Environment

class Study:
    def __init__(self, module: Module):
        self.module = module
        self.wrapper = textwrap.TextWrapper(width=Environment.ui_width) 
        self.questions = module.getCoreMarkup().getQuestions()
        self.weights = [Environment.max_probability_weight]*len(self.questions)
        self.isStudying = True
        self.render()

    def render(self):
        while(self.isStudying):
            questionIndex = random.choices(range(0,len(self.questions)), weights=self.weights, k=1)[0]
            print("="*Environment.ui_width)
            self.printQuestion(self.questions[questionIndex])
            print("="*Environment.ui_width)

            print("R - Remembered | F - Forgotten | Q - Quit")
            userInput = input(": ")

            if userInput.lower() in ["r",""]:
                self.weights[questionIndex] -= 1
            elif userInput.lower() == "q":
                self.isStudying = False
            if(self.weights==[0]*len(self.questions)):
                print("Finished Studying!")
                self.isStudying = False

    def printQuestion(self, question: Question):
        main_concept = self.wrapper.wrap(text=question.getMainConcept())
        details = []
        for detail in question.getDetails():
            if(isinstance(detail,str)):
                details.append(self.wrapper.wrap(text=detail))
                continue
            details.append(detail)

        if(question.isEnumerable()):
            print("Question:")
            self.printWrappedString(main_concept)

            input("Press enter to continue".center(Environment.ui_width))

            print("Answer:")
            for detail in details:
                if(isinstance(detail, list)):
                    self.printWrappedString(detail)
                elif(isinstance(detail, Question)):
                    self.printQuestion(detail)

        else:
            selectedDetail = random.choice(details)

            print("Question:")
            if(isinstance(selectedDetail,list)):
                self.printWrappedString(selectedDetail)
            elif(isinstance(selectedDetail,Question)):
                self.printQuestion(selectedDetail)
            
            input("Press enter to continue".center(Environment.ui_width))
            
            print("Answer:")
            self.printWrappedString(main_concept)

    def printWrappedString(self, stringList: list):
        for string in stringList:
            print(string)