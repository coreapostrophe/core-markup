from pathlib import Path
from lib.CoreMarkup import CoreMarkup
import os

class Module:
    def __init__(self, name:str, file):
        self.name = name
        self.file = file
        self.markup = CoreMarkup(file)

    def getName(self)->str:
        return self.name

    def getFile(self):
        return self.file

    def getCoreMarkup(self)->CoreMarkup:
        return self.markup