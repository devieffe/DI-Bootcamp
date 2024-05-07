#Decorators

#@nameoffunction
#def do_this():
#    pass


import time 

def tictoc(func): #the decorator func
    def wrapper():
        t1 = time.time()
        func()
        total = time.time() - t1
        print(f'{func.__name__} took {total} sec')
    return wrapper

@tictoc
def do_this():
    time.sleep(2)

@tictoc
def do_that():
    time.sleep(1.5)

@tictoc
def do_smth():
    time.sleep(.5)


do_this()
do_that()
do_smth()


print('Finished.')