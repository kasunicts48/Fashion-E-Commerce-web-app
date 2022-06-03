import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FlashOffIcon from '@material-ui/icons/FlashOff';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: '#BA68C8'
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  button: {
    color: '#BA68C8',
    fontWeight: 'bold',
    background: 'white'
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NeedToLearn() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isAnimationOn,setIsAnimationOn] = React.useState(true)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" className={classes.button} onClick={handleClickOpen}>
        Learn React
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ReactJs for beginners
            </Typography>
            <IconButton edge="start" color="inherit" onClick={() => setIsAnimationOn(!isAnimationOn)} aria-label="close">
            {isAnimationOn ?
                <FlashOnIcon /> : <FlashOffIcon />}
            
            </IconButton>
          </Toolbar>
        </AppBar>
        
      </Dialog>
    </div>
  );
}
