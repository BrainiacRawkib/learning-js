new Date(); // current date
new Date(2015, 0); // 12:00 A.M., Jan 1, 2015
new Date(2015, 1); // 12:00 A.M., Feb 1, 2015
new Date(2015, 1, 14); // 12:00 A.M., Feb 14, 2015
new Date(2015, 1, 14, 13); // 3:00 P.M., Feb 14, 2015
new Date(2015, 1, 14, 13, 30); // 3:30 P.M., Feb 14, 2015
new Date(2015, 1, 14, 13, 30, 5); // 3:30:05 P.M., Feb 14, 2015
new Date(2015, 1, 14, 13, 30, 5, 500); // 3:30:05.5 P.M., Feb 14, 2015
// creates dates from Unix Epoch timestamps
new Date(0); // 12:00 A.M., Jan 1, 1970 UTC
new Date(1000); // 12:00:01 A.M., Jan 1, 1970 UTC
new Date(1463443200000); // 5:00 P.M., May 16, 2016 UTC
// use negative dates to get dates prior to the Unix Epoch
new Date(-365*24*60*60*1000); // 12:00 A.M., Jan 1, 1969 UTC
// parsing date strings (defaults to local time)
new Date('June 14, 1903'); // 12:00 A.M., Jun 14, 1903 local time
new Date('June 14, 1903 GMT-0000'); // 12:00 A.M., Jun 14, 1903 UTC