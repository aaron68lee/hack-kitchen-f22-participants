""" 
Given a list of ingredients with [ingredient, cost, minimum_required] and budget

Gordon needs this program to maximize the number of distinct ingredients that he can 
    purchase before purchasing more of a single ingredient, prioritizing ingredients that
    can have their minimum_required met (or closest to meeting) within the budget.
    - In cases where minimum_required cannot be met, minimize the amount of money used.
 
Return a shopping list of ingredients with the quantity that Gordon can buy. It should be in
    the form of [[ingredient, quantity], [ingredient, quantity], ...]. 
    - The list can be returned in any order.
    - If no ingredients can be purchased, return [] (an empty list)

Constraints: 
    - All prices are non-negative. 
    - Ingredient list will contain at least 1 ingredient.
    - This is only for a dessert service, so the ingredient list will be limited to 50 distinct ingredients.
    - Gordon is rich, so the budget is limited to a generous 500000

###############################################################################
Example 1
Ingredients:    [["flour", 3.59, 2],
                ["egg", 0.99, 6],
                ["baking soda", 3.49, 1]]
Budget: 13
Return: [["flour", 2], ["egg", 2], ["baking soda", 1]]
Explanation: 
    Prioritize one of each item first. Add 1 bag of flour, 1 egg, and 1 box of baking soda. 
    This totals 8.07. 
    Next, prioritize the other bag of flour since the minimum_requirement can be reached.
    This totals 8.07 + 3.59 = 11.66
    Finally, only the eggs are left to purchase. Purchase as many eggs as possible. In this case, only 1 
    more egg can be purchased to stay under budget.
    This totals 11.66 + 0.99 = 12.65 < 13

###############################################################################
Example 2
Ingredients:    [["flour", 3.59, 2],
                ["egg", 0.99, 6],
                ["baking soda", 3.49, 1]]
Budget: 7
Return: [["baking soda", 1], ["egg", 3]]
Explanation:
    Prioritize one of each item. Add 1 egg and 1 box of baking soda. 
    This totals 4.48
    Flour cannot be added to the shopping list because it would go over budget. (4.48 + 3.59 > 7)
    Since there is 7 - 4.48 = 2.52 left, purchase 2 more eggs. 
    This totals 6.46 < 7
"""

# This is austin's submission i just left it here cuz i wanna see if i got it right lol
def austin(ingredients, budget):
    ingredients.sort(key=lambda x: (x[1], x[2]))
    res = []
    for ingredient, cost, _ in ingredients:
        if budget - cost < 0:
            break
        res.append([ingredient, 1])
        budget -= cost
        
    for i in range(len(ingredients)):
        ingredient, cost, amount_required = ingredients[i]
        if budget - cost * (amount_required - 1) < 0:
            while budget - cost > 0:
                res[i][1] += 1
                budget -= cost
            return res
        res[i][1] = amount_required
        budget -= cost * (amount_required - 1)
    return res
    
# Dessert service starts in 30 minutes, so complete the function asap and don't disappoint Gordon!
# AARON

def get_ingredients(ingredients, budget):
    ingredients.sort(key=lambda x: (x[1], x[2]))
    cart = []
    for i in range(len(ingredients)):
        cost = ingredients[i][1]
        if (budget - cost) >= 0: # buy one of each
            budget -= cost # cost of item i
            cart.append([ingredients[i][0], 1])
            ingredients[i][2] -= 1

    min = ingredients[i][2]
    for i in range(len(ingredients)):
        #cost = ingredients[i][1] * (min - 1) # cost for all min required
        #amt = max(min, )# number you can actually buy

        # buy all min cost items
        cost = ingredients[i][1]
        while (budget - cost) >= 0: # buy one of each
            budget -= cost # cost of item i
            thing = ingredients[i][0]
            newAmt = cart[i][1] + 1
            cart[i] = [thing, newAmt]
            ingredients[i][2] -= 1

    #amt = max(min, )# number you can actually buy

    #print (ingredients[0])
    return cart

if __name__ == '__main__':
    # Edit ingredients and budget to test your program

    # Test Case 1
    print("=== Test Case 1 ===")
    ingredients = [["flour", 3.59, 2],
                ["egg", 0.99, 6],
                ["baking soda", 3.49, 1]]
    budget = 13
    print("austin output:")
    print(austin(ingredients, budget))
    print("-------")
    print("yalls output:")
    print(get_ingredients(ingredients, budget))

    print()
    print("=== Test Case 2 ===")
    ingredients = [["flour", 3.59, 2],
                ["egg", 0.99, 6],
                ["baking soda", 3.49, 1]]
    budget = 7
    
    print("austin output:")
    print(austin(ingredients, budget))
    print("-------")
    print("yalls output:")
    print(get_ingredients(ingredients, budget))