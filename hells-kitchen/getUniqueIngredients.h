#include <iostream>
#include <string>
#include <cctype>
#include <unordered_set>

using namespace std;

string process(string s)
{
    string str = "";
    char c;
    for(int i = 0; i < s.length(); i++)
    {
        c = s[i];
        if (isalpha(c)) // remove space and digits
        {
            str += tolower(c);
        }
    }
    return str;
}

int getUniqueIngredients(string ingredients[], int size) {
    //ignore digits, spaces, symbols, and case    
    unordered_set <string> set;
    string temp;
    for (int i = 0; i < size; i++) {
        temp = process(ingredients[i]);
        set.insert(temp);
    }
    return set.size();
}