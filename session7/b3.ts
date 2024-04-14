
enum WeekDays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
for (let day in WeekDays) { // for in :duyet qua chỉ số trong mảng 
    // for of :duyệt qua các phân tu của mảng 
   if (isNaN(Number(day))){ // điều kiện nay để in ra các phần tử 
        console.log(day);
    }
}
