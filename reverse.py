number = 1234
reversed = 0

while number != 0:
    digit = number % 10
    print(digit)

    reversed = reversed * 10 + digit
    number //= 10

print("Reversed Number: " + str(reversed))