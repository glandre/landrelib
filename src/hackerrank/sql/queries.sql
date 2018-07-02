/*
	Query the list of CITY names from STATION that do not end with vowels. Your result cannot contain duplicates.
	https://www.hackerrank.com/challenges/weather-observation-station-10/problem
	Enter your query here.
*/
select distinct city from station where not (city rlike '^.*[aeiouAEIOU]$');

/*
	Weather Observation Station 11 - https://www.hackerrank.com/challenges/weather-observation-station-11/problem
	Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.
	Enter your query here.
*/
select distinct city 
from station 
where not (city rlike '^[aeiouAEIOU].*$') 
   or not (city rlike '^.*[aeiouAEIOU]$');

/*
	Weather Observation Station 12 - https://www.hackerrank.com/challenges/weather-observation-station-12/problem
	Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.
	Enter your query here.
*/
select distinct city 
from station 
where not (city rlike '^[aeiouAEIOU].*$') 
  and not (city rlike '^.*[aeiouAEIOU]$');

/*
	Higher Than 75 Marks - https://www.hackerrank.com/challenges/more-than-75-marks/problem
	Query the Name of any student in STUDENTS who scored higher than  Marks. 
	Order your output by the last three characters of each name.
	If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), 

	secondary sort them by ascending ID.
	Enter your query here.
*/
select name from students
where marks > 75
order by substring(name, -3), id;

/*
    Employee Names - https://www.hackerrank.com/challenges/name-of-employees/problem
    Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.

    Enter your query here.
*/
select name from employee
order by name

/*
    Employee Salaries - https://www.hackerrank.com/challenges/salary-of-employees/problem

    Write a query that prints a list of employee names (i.e.: the name attribute) for employees in Employee having a salary greater than 2000 per month who have been employees for less than 10 months. Sort your result by ascending employee_id.

    Enter your query here.
*/
select name from employee
where salary > 2000
  and months < 10
order by employee_id;