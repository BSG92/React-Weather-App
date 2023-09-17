export interface CurrentWeatherType {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    rain?: Rain_Snow
    snow?: Rain_Snow
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
  }
  
  export interface Coord {
    lon: number
    lat: number
  }
  
  export interface Weather {
    id: number
    main: string
    description: string
    icon: string
  }
  
  export interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  
  export interface Wind {
    speed: number
    deg: number
    gust: number
  }
  
  export interface Clouds {
    all: number
  }

  export interface Rain_Snow {
    '1h'?: number
    '3h'?: number
  }
  
  export interface Sys {
    country: string
    sunrise: number
    sunset: number
  }
  