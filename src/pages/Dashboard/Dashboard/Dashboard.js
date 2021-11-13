import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ManageOrders from "../ManageOrders/ManageOrders";
import UserOrders from "../UserOrders/UserOrders";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddReview from "../AddReview/AddReview";
import ManageProducts from "../ManageProducts/ManageProducts";
import Payment from "../Payment/Payment";
import "./Dashboard.css";
import UserRoute from "../../Login/UserRoute/UserRoute";

const drawerWidth = 178;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, user, logout } = useAuth();
  console.log(path, url);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="menu " style={{ textAlign: "center" }}>
      <img
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginLeft: "20px",
        }}
        src={
          user?.photoURL
            ? user?.photoURL
            : "https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png"
        }
        alt=""
      />
      <br />
      <p>{user?.displayName}</p>
      <br />
      <Button
        style={{ marginLeft: "20px", marginBottom: "20px" }}
        onClick={logout}
        variant="contained"
        color="error"
      >
        Logout
      </Button>
      <br />
      <Divider />
      <Link to="/explore">
        <Button color="inherit">Explore Products</Button>
      </Link>
      {!admin && (
        <>
          <Link to={`${url}`}>
            <Button color="inherit">Dashboard</Button>
          </Link>
          <Link to={`${url}/userOrders`}>
            <Button color="inherit">User Orders</Button>
          </Link>
          <Link to={`${url}/addReviews`}>
            <Button color="inherit">Add Reviews</Button>
          </Link>
          <Link to={`${url}/payment`}>
            <Button color="inherit">Make Payment</Button>
          </Link>
        </>
      )}

      {admin && (
        <>
          <Link to={`${url}/makeAdmin`}>
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/addProduct`}>
            <Button color="inherit">Add Products</Button>
          </Link>
          <Link to={`${url}/manageOrders`}>
            <Button color="inherit">Manage Orders</Button>
          </Link>
          <Link to={`${url}/manageProducts`}>
            <Button color="inherit">Manage Products</Button>
          </Link>
        </>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#222" }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <UserRoute path={`${path}/userOrders`}>
            <UserOrders></UserOrders>
          </UserRoute>
          <UserRoute path={`${path}/payment`}>
            <Payment></Payment>
          </UserRoute>
          <UserRoute path={`${path}/addReviews`}>
            <AddReview></AddReview>
          </UserRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddNewProduct></AddNewProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
