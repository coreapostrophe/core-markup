
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