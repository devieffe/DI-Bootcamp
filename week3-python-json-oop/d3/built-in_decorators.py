#Built-in Decortors

#@staticmethod

#class MyClass:
    
#    @staticmethod
#    def add(a, b):
#        return a + b
    
#class Child(MyClass):
#    pass

#child_obj = Child()
#print(child_obj.add(5, 3))




#@classmethod

class MyClass:
    counter = 0

    @classmethod
    def add(cls, a):
        cls.counter += a
        return cls.counter
    
MyClass().add(5)
print(MyClass.counter)


class Circle:
    def __init__(self, radius) -> None:
        self.radius = radius

    @classmethod
    def from_radius(cls, radius):
        return cla(radius = radius, diameter = radius *2)
            #Circle(5,5*2)
    @classmethod
    def from_radius(cls, diameter):
        return cls(radius = diameter /2, diameter = diameter)


circle0 = Circle(5)
circle_obj = Circle.from_radius(5)
circle_obj.diameter
circle_obj = Circle.from_diameter(12)
print(circle_obj)