// bài tập về nhà cách ôn tư duy lập trình
Tính Tổng S = 1 + 2 + 3 + .. + 
 Var n : interger;
 s: longint;
 BEGIN 
 repeat 
 write (' Nhap n:'); readln(n);
 until (n>=0);
 s:=0;
 for i:=1 to n do 
 s:=s+1;
 write('Tong cac so tu 1 toi' , n,`=`,S);
 readln
 END
 


 Tính tổng S=1^2 + 2^2 + 3^2 + ... + n^2
     Var n,i,s:integer;
     begin 

     readln(n);
     for i:=1 to n do s:=s +i*i;
     Writeln(n);
     readln;
     END


     Tinh tông S= 1 + 1/2 + 1/3 + 1/4 + ... + 1/n. 
        Var i , n : integer;
        S : real;
        BEGIN
        write('n=');read(n)
        S=0;
        for i:=1 to n do S : = S + 1/i;
        Writeln(n);
        Readln;
        END