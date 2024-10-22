import pyowm
from pyowm.utils.config import get_default_config
from datetime import datetime

owm = pyowm.OWM('#')

def get_weather_by_id(city_id):
    """Weather using city ID"""
    mgr = owm.weather_manager()
    observation = mgr.weather_at_id(city_id)  
    weather = observation.weather

    temp = weather.temperature('celsius')["temp"]
    wind = weather.wind()
    sunrise_time = datetime.utcfromtimestamp(weather.sunrise_time()).strftime('%Y-%m-%d %H:%M:%S')
    sunset_time = datetime.utcfromtimestamp(weather.sunset_time()).strftime('%Y-%m-%d %H:%M:%S')

    print(f"Current weather:\nTemperature: {temp}°C\nWind: {wind['speed']} m/s\nSunrise: {sunrise_time}\nSunset: {sunset_time}")

def main():
    city_id = int(input("City ID: ")) 
    get_weather_by_id(city_id)

if __name__ == '__main__':
    main()



def get_weather_forecast(city_id):
    """Get 5-day weather forecast for a city"""
    mgr = owm.weather_manager()
    forecast = mgr.forecast_at_id(city_id, '3h')  
    weather_list = forecast.forecast.weathers

    print(f"Weather forecast for the next 5 days (3-hour intervals):")
    for weather in weather_list:
        time = datetime.utcfromtimestamp(weather.reference_time()).strftime('%Y-%m-%d %H:%M:%S')
        temp = weather.temperature('celsius')["temp"]
        status = weather.status
        print(f"At {time}, the temperature will be {temp}°C with {status}.")

get_weather_forecast(city_id)



def get_air_pollution(city_lat, city_lon):
    """Retrieve air pollution data for a given location."""
    mgr = owm.airpollution_manager()
    air_quality = mgr.air_quality_at_coords(city_lat, city_lon)
    
    air_data = air_quality.to_dict()
    aqi = air_data['aqi']
    components = air_data['components']

    print(f"Air Pollution Data:")
    print(f"AQI: {aqi}")
    print(f"Components: {components}")

get_air_pollution(32.0853, 34.7818)

