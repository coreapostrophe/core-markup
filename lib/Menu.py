from enum import Enum
from lib.ModuleManager import ModuleManager
from lib.StudyManager import StudyManager

class Menu:
    def __init__(self):
        self.moduleManager = ModuleManager()

    def render(self):
        self.print()                                        # Prints chapter list
        print("Choose chapter to study")
        self.userInput = input(": ")                        # Prompts user input
        self.currentSelection = None                        # Primes current selection var
        for moduleName in self.moduleManager.getModules():  # cycles through the chapter list
            if self.userInput.lower() in moduleName.lower():
                self.currentSelection = moduleName
        if self.currentSelection is not None:
            _ = StudyManager(self.moduleManager.getModule(self.currentSelection))
        else:
            print("Input is not within the choices")

    def print(self):
        print("Menu".center(50,"="))
        for moduleName in self.moduleManager.getModules():
            print(moduleName.center(50))
        print("="*50)