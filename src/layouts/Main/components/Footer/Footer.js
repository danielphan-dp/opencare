import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import toast, { Toaster } from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },

  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  divider: {
    width: "100%",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}));

const Footer = (props) => {
  const { pages, className, ...rest } = props;
  const classes = useStyles();

  const handleIconClick = () => {
    toast("This is an upcoming community feature!", {
      duration: 3000,
      style: {
        border: "5px solid #E1C699",
        padding: "16px",
        color: "#713200",
        minWidth: "800px",
        marginTop: "70px",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  };

  const MenuGroup = (props) => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={"a"}
              href={page.href}
              className={clsx(classes.navLink, "submenu-item")}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Toaster />
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters>
                <IconButton
                  className={classes.socialIcon}
                  onClick={handleIconClick}
                >
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.socialIcon}
                  onClick={handleIconClick}
                >
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.socialIcon}
                  onClick={handleIconClick}
                >
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.socialIcon}
                  onClick={handleIconClick}
                >
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}></Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
