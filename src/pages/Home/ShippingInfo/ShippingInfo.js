import { Container, Grid, Typography } from "@mui/material";

import React from "react";

const ShippingInfo = () => {
  return (
    <Container
      style={{
        backgroundColor: "#555",
        color: "#fff",
        textAlign: "justify",
        textTransform: "uppercase",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          style={{ borderRight: "1px solid #fff", paddingTop: "20px" }}
        >
          <Typography variant="h5">Free Shipping</Typography>
          <Typography variant="h6">Free Shipping</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          style={{ borderRight: "1px solid #fff", padding: "20px" }}
        >
          <Typography variant="h5">10-Day Return</Typography>
          <Typography variant="h6">10-Day Return</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          style={{ borderRight: "1px solid #fff", padding: "20px" }}
        >
          <Typography variant="h5">24/7 Support</Typography>
          <Typography variant="h6">24/7 Support</Typography>
        </Grid>
        <Grid item xs={12} md={3} style={{ padding: "20px" }}>
          <Typography variant="h5">Safe Shopping</Typography>
          <Typography variant="h6">Safe Shopping</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShippingInfo;
