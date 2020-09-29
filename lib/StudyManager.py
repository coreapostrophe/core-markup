from enum import Enum
from lib.Study import Study
from lib.Module import Module
from lib.CoreMarkup import CoreMarkup
from lib.ModuleManager import ModuleManager

class StudyManager:
    def __init__(self):
        self.moduleManager = ModuleManager()

    def render(self):
        self.printMenu()                                    # Prints chapter list
        print("Choose chapter to study")
        self.userInput = input(": ")                        # Prompts user input
        self.currentSelection = None                        # Primes current selection var
        for moduleName in self.moduleManager.getModules():  # cycles through the chapter list
            if self.userInput.lower() in moduleName.lower():
                self.currentSelection = moduleName
        if self.currentSelection is not None:
            _ = Study(self.moduleManager.getModule(moduleName))
        else:
            print("Input is not within the choices")

    def printMenu(self):
        print("Menu".center(50,"="))
        for moduleName in self.moduleManager.getModules():
            print(moduleName.center(50))
        print("="*50)