import csv
from bs4 import BeautifulSoup


country_data = open('../Human_life_Expectancy.csv')
csvreader = csv.reader(country_data)

rows = []
for row in csvreader:
    rows.append(row)



url = "index.html"
page = open(url)

soup = BeautifulSoup(page.read(), features="lxml")

for el in soup.find_all(lambda e: e.name == 'path'):
    found = False
    for row in rows:
        if el.has_attr('class'): 
            found = row[0] == ' '.join(el['class'])
        elif el.has_attr('name'):
            found = row[0] == el['name']
        if found: break
    if not found:
        el['fill'] = '#bcbcbc'

with open("__index.html", "w", encoding="utf-8") as file:
    file.write(str(soup))