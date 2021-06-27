// User nhấn vào Nút "Add Task"  Xoá class hidden đi và thêm class show vào
// * Lấy nút Add Task (đã đặt id=btnAddTask)
var btnAddTask = document.getElementById('btnAddTask');
// *Viết sự kiện cho onClick của nút btnAddTask
btnAddTask.addEventListener('click',()=>{
    // alert('btnAddTask'); //Kiem tra su kien da chay chua. OK
    // Xoá class hidden đi và thêm class show vào form (đã đặt id=frmAddTask)
    document.getElementById('frmAddTask').classList.remove('hidden');
    document.getElementById('frmAddTask').classList.add('show');
});
// Khi nhập thì phải lưu được vào trong một biến nào đó
var taskName ='';
var level = 0;
document.getElementById('txtInput').addEventListener('input',(e)=>{
    taskName = e.target.value;
});
document.getElementById('slSelect').addEventListener('change',(e)=>{
    level = e.target.value;
});
// Khi ấn submit lưu dữ liệu vào danh sách listTasks
// *Khai báo danh sách
var listTasks = [];
// *viết sự kiện cho nút submit
document.getElementById('btnSubmit').addEventListener('click',()=>{
    // ĐỊnh nghĩa dữ liệu cho một tác vụ có những thông tin như sau
  const taskData = {
    id: Math.random() * 1111 + 1000, // random ngẫu nhiên số cố 4 chữ số Math.random() * 1111 + 1000
    name: taskName,
    level: level, // Nhập từ ô input. 1 -> Small, 2 -> Medium, 3 -> High
  };

    //  Khi User nhấn vào nút Submit -> Thêm phần tử này vào trong Array (Thêm phần tử mới vào một Array, push)
    listTasks.push(taskData);  //Thêm task vào mảng
   showArray(); //Gọi hàm xử lý việc xuất mảng ra bảng bằng html
});
function showArray(){
    if(listTasks.length>0){
        var result = listTasks.map((task,index)=>{  //Duyệt qua phần tử mảng, mỗi phần tử thay thế bằng biểu thức trong return. Chổ này để chuyển kết quả 1 mảng từ giá trị đầu gồm taskName và level thành 1 dòng tr trong table. theo định dạng bên Html
            return `<tr>
                <td>${index+1}</td>
                <td>${task.name}</td>
                <td class="text-center"></td>
                <td>${task.level==0?'<span class="badge badge-secondary">Small</span>':(task.level=='1'?'<span class="badge badge-info">Medium</span>':'<span class="badge badge-danger">High</span>')}</td>
                <td>
                    <button type="button" class="btn btn-warning">Edit</button> 
                    <button type="button" class="btn btn-danger" onclick="deleteId(${task.id})">Delete</button>
                </td>
                </tr>`;
                //Nút delete gọi hàm deleteId với tham số là id của task
            }).reduce((total,mem)=>{   //Duyệt qua phần tử và trả về kết quả của phép toán nối chuỗi. Ở đâu các phần tử mảng là 1 chuỗi. mỗi lần vòng lập chạy thì 'mem' là phần tử đại diện cho phần tử hiện tại. 'total' đại diện cho biến toàn cục. Hàm này reduce trong array dùng để tính tổng/tích...của các phần tử.
        return total +=mem; //Chuỗi total rỗng. mỗi lần duyệt total = total + mem
        });
        var tableBody = document.querySelector('table tbody'); //Gán kết quả vào vị trí table > tbody
        tableBody.innerHTML = result;//Thay đổi html của thẻ tbody thành chuỗi result
    }
    else
    {
        var tableBody = document.querySelector('table tbody'); //Gán kết quả vào vị trí table > tbody
        tableBody.innerHTML = '';//Thay đổi html của thẻ tbody thành chuỗi result
    }
     // chuyển list thành html với định dạng đã có ở html
    

}

function deleteId(id){ //Hàm deleteId có tham số là id
    listTasks.splice(listTasks.findIndex(x=>x.id==id),1); // tại vị trí tìm được id, xoá 1 phần tử
    showArray();//Gọi hàm xử lý hiện listTask bằng Html
}