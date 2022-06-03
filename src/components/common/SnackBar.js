import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({ variant, message, changed }) {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    if(changed > 0) enqueueSnackbar(message, { variant });
  }, [variant,changed,message]);


  return (
    <React.Fragment>
    </React.Fragment>
  );
}

export default function SnackBar({ variant,message,changed }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp variant={variant} message={message} changed={changed} />
    </SnackbarProvider>
  );
}
 