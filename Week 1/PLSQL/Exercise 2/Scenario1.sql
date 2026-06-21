CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER(10,2)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    DepartmentID NUMBER,
    Salary NUMBER(10,2)
);

INSERT INTO Accounts VALUES (101,'John','Savings',10000);
INSERT INTO Accounts VALUES (102,'Alice','Savings',15000);
INSERT INTO Accounts VALUES (103,'Bob','Current',20000);
INSERT INTO Accounts VALUES (104,'David','Savings',25000);

COMMIT;

INSERT INTO Employees VALUES (1,'Rahul',10,50000);
INSERT INTO Employees VALUES (2,'Priya',10,60000);
INSERT INTO Employees VALUES (3,'Aman',20,55000);
INSERT INTO Employees VALUES (4,'Neha',20,65000);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM Accounts;