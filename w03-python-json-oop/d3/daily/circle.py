# Circle
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.
# Other abilities of a Circle instance:
# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles


import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius != None:
            self.radius = radius
            self.diameter = radius * 2
        elif diameter != None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("Radius / Diameter pls.")
    
    @property
    def area(self):
        return math.pi * (self.radius ** 2)
    
    def __str__(self):
        return f"Circle: radius={self.radius}, diameter={self.diameter}, area={self.area:.2f})"
    
    def __repr__(self):
        return self.__str__()
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        return NotImplemented
    
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

circle1 = Circle(radius=21)
circle2 = Circle(diameter=18)
circle3 = Circle(radius=55)

print(circle1.area) 
print(circle1) 

circle4 = circle1 + circle3
print(circle4) 

print(circle1 < circle2)  
print(circle1 == circle3) 

circles = [circle1, circle2, circle3]
circles.sort()
for circle in circles:
    print(circle)


print("Turtle:")

import turtle

def draw(circle):
    turtle.penup()
    turtle.goto(0, -circle.radius)
    turtle.pendown()
    turtle.circle(circle.radius)

turtle.speed(1)
for circle in sorted(circles):
    draw(circle)
    turtle.penup()
    turtle.goto(0, 0)
    turtle.pendown()