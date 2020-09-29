from lib.Module import Module

class Study:
    def __init__(self, module: Module):
        self.module = module
        self.isStudying = True
        self.phasesUI = module.getCoreMarkup().getQuestions()
        self.phaseCI = []
        self.phaseCC = []
        self.phaseUC = []
        self.render()

    def render(self):
        print()