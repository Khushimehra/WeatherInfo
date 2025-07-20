import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    let HOT_URL = "https://images.unsplash.com/photo-1716396676244-98917bb7b971?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670963965022-59c9ac468c18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1667516468789-81a6ba214724?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="infoBox">
             <h2>WeatherInfo - {info.weather}
             </h2>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 150 }}
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}  {
                 info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
                }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}</p>
                        <p>Minimum Temperature : {info.temp_Min}&deg;C</p>
                        <p>Maximum Temperature : {info.temp_Max}&deg;C</p>
                        <p>Weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
             </div>
    )
}
