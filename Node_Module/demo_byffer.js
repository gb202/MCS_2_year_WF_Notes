//BUFFER
/* 
->its an area of memory ,
->represent fix size blocks of memory which cannot be resized allocated 
outside of V8 javaScript engine.
->in nodejs buffer is implemented by using buffer class.
-> its a global class and accessed in an application without
importing the buffer module

3 ways u can use buffer
1 -> buffer.form()
2 -> buffer.alloc()
3 -> buffer.allocUnsafe()

*/
//Writing to Buffers
/*
Syntax 
buf.write(string[, offset][, length][, encoding])
Here is the description of the parameters used −

string − This is the string data to be written to buffer.

offset − This is the index of the buffer to start writing at. Default value is 0.

length − This is the number of bytes to write. Defaults to buffer.length.

encoding − Encoding to use. 'utf8' is the default encoding.
“Unicode Transformation Format - 8 bits.”*/

buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

