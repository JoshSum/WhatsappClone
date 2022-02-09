import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
          <img src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png" 
          alt="logo" 
          style={{marginBottom: 10}}
          height={200}/>
          <CircularProgress style={{display: "grid"}} color="success" size={60}/>
      </div>
    </center>
  );
}

export default Loading;
