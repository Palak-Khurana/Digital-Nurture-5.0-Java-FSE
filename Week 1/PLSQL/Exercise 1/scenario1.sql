CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER(10,2),
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID)
        REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (1,'John',65,15000,'FALSE');
INSERT INTO Customers VALUES (2,'Alice',45,8000,'FALSE');
INSERT INTO Customers VALUES (3,'Bob',70,12000,'FALSE');
INSERT INTO Customers VALUES (4,'Emma',30,5000,'FALSE');
INSERT INTO Customers VALUES (5,'David',62,20000,'FALSE');

INSERT INTO Loans VALUES (101,1,10.5,SYSDATE+15);
INSERT INTO Loans VALUES (102,2,11.0,SYSDATE+40);
INSERT INTO Loans VALUES (103,3,9.5,SYSDATE+20);
INSERT INTO Loans VALUES (104,4,12.0,SYSDATE+50);
INSERT INTO Loans VALUES (105,5,10.0,SYSDATE+25);

COMMIT;

SELECT * FROM Customers;
SELECT * FROM Loans;

BEGIN
   FOR cust IN (
      SELECT CustomerID
      FROM Customers
      WHERE Age > 60
   )
   LOOP
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE CustomerID = cust.CustomerID;
   END LOOP;

   COMMIT;
END;
/

SELECT * FROM Loans;