import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Grid } from "@material-ui/core";
import { LearnMoreLink, Image } from "../../../../components/atoms";
import { SectionHeader } from "../../../../components/molecules";
import { CardBase } from "../../../../components/organisms";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: 50,
  },
}));

const Partners = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <SectionHeader
            title="We love to explore new ways to engage with brands and reach"
            subtitle="Our mission is to revolutionize healthcare with the help of machine learning"
            align="left"
            label="100+ Integrations"
            disableGutter
          />
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            {data.map((item, index) => (
              <Grid item xs={4} key={index}>
                <CardBase withShadow liftUp>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    className={classes.logo}
                    lazy={false}
                  />
                </CardBase>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default Partners;
