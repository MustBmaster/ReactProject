import Axios from "axios";
import { notification } from "antd";

//lẽ ra ta sẽ import 1 cái bộ định danh cho từng status code
// nhưng hiện tại mới có cái đăng nhập nên sẽ làm sau

// cấu hình mặc định cho thông báo notification
notification.config({
    maxCount:1,//số thông báo tối đa hiển thị trên màn
    duration:3,//thời gian hiển thị thông báo
});

//hiểu cái interceptors là 1 cái bộ tự động thêm các nội dung
//cho các request và response, như kiểu header, payload ,vv
//ở đây là mình cấu hình mặc định cho cái response sẽ render ra màn 1 cái thông báo
Axios.interceptors.response.use(
    // đối với response-trả lại về các code 500, 200
    response=>{
        if(response||response.data.statusCode===500){
            notification.error({
                message:"Thông báo",
                description: response.data.message,
            })
        }
        if(response||response.data.statusCode===200){
            notification.success({
                message:"Thông báo",
                description: response.data.message,
            })
            localStorage.setItem("ex1-auth-token", response.data.data);
        }
    },
    // đối với các lỗi trả về các code còn lại
    error=>{
        let msg="";
        // xử lí với các lỗi có trả lại response
        if(error && error.response){
            msg=error.response.data.message
            if(msg){
                notification.error({
                    message:"Thông báo",
                    description:error.response.data.message,
                })
            }
        }
        // xứ lí với các lỗi còn lại
        else{
            notification.error({
                message:"Thông báo",
                description:"Lỗi hệ thống"
            })
        }
    }
)

// thực hiện 1 cái request get/post mặc định, tham số truyền vào là url của API
// hiểu về async và await: cái async function sẽ cho phép sử dụng await, 
// nhằm mục đích hoãn tất cả các tác vụ đang thực hiện và đợi cho tới khi cái bên trong await được thực thi xong

export async function defaultGet(endpoint){
    return await Axios({
        method:"GET",
        url:endpoint
    })
}

export async function defaultPost(endpoint, method, payload) {
    const body = {};
    // eslint-disable-next-line array-callback-return
    Object.keys(payload).map((key) => {
      body[key] = payload[key];
      if (payload[key] ||typeof payload[key] === "boolean" ||typeof payload[key] === "number"){
        body[key] = payload[key];
      }
    });
    return await Axios({
      headers: {},
      method: method,
      url: endpoint,
      data: body,
    });
}
// cái request get/post có kèm cái token đã nhận về, bắt ra từ cái localStorage
export async function authGet(endpoint){
    const token=localStorage.getItem("ex1-auth-token")
    return await Axios({
        header:{
            Authorization: `Bearer ${token}`,
        },
        method:"GET",
        url:endpoint
    })
}
export async function authPost(endpoint, method, payload) {
    const body = {};
    const token=localStorage.getItem("ex1-auth-token")
    // eslint-disable-next-line array-callback-return
    Object.keys(payload).map((key) => {
      body[key] = payload[key];
      if (payload[key] ||typeof payload[key] === "boolean" ||typeof payload[key] === "number"){
        body[key] = payload[key];
      }
    });
    return await Axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: method,
      url: endpoint,
      data: body,
    });
}