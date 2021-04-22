import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 40,
    left: 'auto',
    position: 'fixed',
   
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <Link href="userpage"><TagFacesIcon /></Link>, name: 'マイページ' },
  { icon: <Link href="/PostForm"><BorderColorIcon /></Link>, name: '投稿する' },
  { icon: <Link href="/signin"><SupervisorAccountIcon /></Link>, name: 'ログイン' },
  { icon: <Link href="/recipe"><SearchIcon /></Link>, name: 'レシピを探す' },
];

export default function MenuBtn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root} >
      {/* <Button onClick={handleVisibility}>Toggle Speed Dial</Button> */}
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </div>
  );
}