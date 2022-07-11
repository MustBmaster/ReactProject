import { Row, Col, Image } from "antd";
import DefaultAvatar from "@assets/DefaultAvatar.png";
import { LogoutOutlined, PhoneTwoTone } from "@ant-design/icons";
import { BsBuilding } from "react-icons/bs";
import { authGet } from "../ApiInterceptors";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@slices/LoginSlice";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { saveModule } from "@slices/HomePageSlice";
import Module from "../../components/Module";
import Logo from "../../components/Logo";
import "./HomePage.css";
find_sum(2,3)
function Avatar() {
  return (
    <div className="avatar">
      <Image src={DefaultAvatar} preview={false} alt="Avatar" height={"96px"} />
    </div>
  );
}
function LogOut() {
  const dispatch = useDispatch();
  function LogoutHandler() {
    dispatch(logOut());
  }
  return (
    <div className="log-out">
      <div onClick={LogoutHandler} style={{ cursor: "pointer" }}>
        Log-out
        <LogoutOutlined />
      </div>
    </div>
  );
}

function Profile() {
  const user = useSelector((state) => state.login.user);
  return (
    <div className="content-wrapper">
      <Avatar></Avatar>
      <div className="profile">
        <div className="profile-name">{user.username}</div>
        <div className="profile-content">
          <PhoneTwoTone />
          <span>{user.phoneNumber}</span>
        </div>
        <div className="profile-content">
          <BsBuilding />
          <span>{user.unitName}</span>
        </div>
      </div>
    </div>
  );
}
function ModuleList() {
  const dispatch = useDispatch();
  // dispatch()

  const moduleApi = "https://21-ex1-api.dev.3si.vn/auth/module";
  const [modules, setModule] = useState([]);

  useEffect(() => {
    getListModule();
  }, []);

  const getListModule = () => {
    authGet(moduleApi)
      .then(function (response) {
        if (response && response.data && response.data.data) {
          setModule([...response.data.data]);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  const redirect = useCallback(
    (module) => {
      // console.log("module code: ", module);
      switch (module) {
        case "n":
          navigate("/module-1");
          break;
        case "a":
          navigate("/module-2");
          break;
        case "m":
          navigate("/tien-ich-chung");
          break;
        default:
          navigate("/test-page");
          break;
      }
    },
    [module]
  );
  // console.log(modules);
  return (
    <div className="full">
      <Row gutter={[8, 8]}>
        {modules.map((module, index) => (
          <Col key={index} span={12}>
            <Module
              modulename={module.shortName}
              detail={module}
              onClick={() => {
                redirect(module.moduleCode);
                //dispatch cái action ở đây
                dispatch(saveModule(module));
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
function LoginInfo() {
  return (
    <Row gutter={16} className="full">
      <Col span={10}>
        <div className="flex-col">
          <Logo />
          <div className="profile-container">
            <Profile></Profile>
            <LogOut></LogOut>
          </div>
        </div>
      </Col>
      <Col span={14}>
        <ModuleList></ModuleList>
      </Col>
    </Row>
  );
}

export default function HomePage() {
  // const dispatch = useDispatch;
  // dispatch(clearState);
  return (
    <div className="body">
      <div className="container">
        <LoginInfo />
      </div>
    </div>
  );
}
