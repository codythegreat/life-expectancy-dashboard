# file used to convert 2 letter alpha codes to 3 letter on svg in index.html 

import csv
from bs4 import BeautifulSoup


country_alpha_codes = open('country-alpha-codes.csv')
csvreader = csv.reader(country_alpha_codes)

rows = []
for row in csvreader:
    rows.append(row)



url = "index.html"
page = open(url)

soup = BeautifulSoup(page.read(), features="lxml")

for el in soup.find_all(lambda e: e.name == 'path' and e.attrs.get('id') != None):
    for row in rows:
        if row[1] == el['id']:
            el['id'] = row[2]

with open("__index.html", "w", encoding="utf-8") as file:
    file.write(str(soup))