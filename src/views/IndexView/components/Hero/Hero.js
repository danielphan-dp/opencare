import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core";
import { Image } from "../../../../components/atoms";
import { SectionHeader } from "../../../../components/molecules";
import PropTypes from "prop-types";
import CloudHostSvg from "../undraw_artificial_intelligence_re_enpp.svg";

const useStyles = makeStyles((theme) => ({
  image: {
    boxShadow:
      "25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",
    borderRadius: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
}));

const Hero = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={4}
        direction={isMd ? "row" : "column-reverse"}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <SectionHeader
            title={
              <span>
                Detect Pneumonia
                <br />
                <Typography component="span" variant="inherit" color="primary">
                  with cutting edge AI technologies!
                </Typography>
              </span>
            }
            subtitle="Create an account and use for free!"
            ctaGroup={[
              <a href="/register">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  // onClick={null}
                >
                  Register
                </Button>
              </a>,
              // <Button variant="outlined" color="primary" size="large">
              //   Learn more
              // </Button>,
            ]}
            align="left"
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="flex-start"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Image
            src={CloudHostSvg}
            style={{ width: "100%" }}
            alt="TheFront Company"
            className={classes.image}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
