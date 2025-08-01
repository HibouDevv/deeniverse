import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Sun, Moon, Star } from 'lucide-react';
import Container from '../Layout/Container';
import MainLayout from '../Layout/MainLayout';

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState({
    pakistan: null,
    saudiArabia: null,
    usa: null
  });
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('pakistan');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [countryTime, setCountryTime] = useState(new Date());

  const countries = [
    {
      id: 'pakistan',
      name: 'Pakistan',
      city: 'Karachi',
      flag: '🇵🇰',
      timezone: 'Asia/Karachi'
    },
    {
      id: 'saudiArabia',
      name: 'Saudi Arabia',
      city: 'Mecca',
      flag: '🇸🇦',
      timezone: 'Asia/Riyadh'
    },
    {
      id: 'usa',
      name: 'United States',
      city: 'New York',
      flag: '🇺🇸',
      timezone: 'America/New_York'
    }
  ];

  const prayerNames = [
    { name: 'Fajr', icon: <Sun className="w-8 h-8" />, arabic: 'الفجر' },
    { name: 'Sunrise', icon: <Sun className="w-8 h-8" />, arabic: 'الشروق' },
    { name: 'Dhuhr', icon: <Sun className="w-8 h-8" />, arabic: 'الظهر' },
    { name: 'Asr', icon: <Sun className="w-8 h-8" />, arabic: 'العصر' },
    { name: 'Maghrib', icon: <Moon className="w-8 h-8" />, arabic: 'المغرب' },
    { name: 'Isha', icon: <Moon className="w-8 h-8" />, arabic: 'العشاء' }
  ];

  const fetchPrayerTimes = async (country, city) => {
    try {
      const today = new Date();
      const date = today.toISOString().split('T')[0];

      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity/${date}?city=${city}&country=${country}&method=1`
      );
      const data = await response.json();

      if (data.status === 'OK') {
        return data.data.timings;
      }
    } catch (error) {
      console.error(`Error fetching prayer times for ${country}:`, error);
    }
    return null;
  };

  useEffect(() => {
    const loadPrayerTimes = async () => {
      setLoading(true);
      const times = {
        pakistan: await fetchPrayerTimes('Pakistan', 'Karachi'),
        saudiArabia: await fetchPrayerTimes('Saudi Arabia', 'Mecca'),
        usa: await fetchPrayerTimes('United States', 'New York')
      };
      setPrayerTimes(times);
      setLoading(false);
    };

    loadPrayerTimes();

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timeInterval);
  }, []);

  const getCurrentPrayer = (times) => {
    if (!times) return null;
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });

    const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    for (let i = prayerOrder.length - 1; i >= 0; i--) {
      const prayer = prayerOrder[i];
      if (times[prayer] && currentTime >= times[prayer]) {
        return prayer;
      }
    }
    return 'Isha';
  };

  const getNextPrayer = (times) => {
    if (!times) return null;
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });

    const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    for (let i = 0; i < prayerOrder.length; i++) {
      const prayer = prayerOrder[i];
      if (times[prayer] && currentTime < times[prayer]) {
        return prayer;
      }
    }
    return 'Fajr';
  };

  const formatTime = (timeString) => {
    if (!timeString) return '--:--';
    try {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minutes} ${ampm}`;
    } catch (error) {
      return timeString;
    }
  };

  const currentCountry = useMemo(() => {
    return countries.find(country => country.id === selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    if (!currentCountry) return;

    const updateCountryTime = () => {
      const countryDateTime = new Date().toLocaleString('en-US', {
        timeZone: currentCountry.timezone
      });
      setCountryTime(new Date(countryDateTime));
    };

    updateCountryTime();
    const interval = setInterval(updateCountryTime, 60000);

    return () => clearInterval(interval);
  }, [selectedCountry]);

  const currentTimes = prayerTimes[selectedCountry];
  const currentPrayer = getCurrentPrayer(currentTimes);
  const nextPrayer = getNextPrayer(currentTimes);

  return (
    <MainLayout>
    <Container>
      <section className="py-16 bg-gradient-to-br from-[#182F51] to-[#0f1f3a]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase bg-[#366AB7] text-white rounded-full shadow-md mb-4 tracking-wider">
            Daily Prayer Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-[#C0A34E] to-[#D8B75A] bg-clip-text text-transparent">
              Prayer Times
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#C0A34E] mx-auto my-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay connected with your daily prayers across different countries
          </p>
        </motion.div>

        {/* Country Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-[#1a3258] backdrop-blur-sm rounded-xl p-2 border border-[#366AB7]/30">
            {countries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`px-6 py-3 rounded-lg mx-1 transition-all duration-300 ${
                  selectedCountry === country.id
                    ? 'bg-[#C0A34E] text-[#182F51] font-semibold shadow-lg'
                    : 'text-white hover:bg-[#366AB7]/20'
                }`}
              >
                <span className="text-xl mr-2">{country.flag}</span>
                {country.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Time and Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-8"
        >
          <div className="bg-[#1a3258] backdrop-blur-sm rounded-xl p-6 border border-[#366AB7]/30 max-w-md mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#C0A34E] mr-2" />
              <span className="text-white font-semibold">
                {currentCountry?.city}, {currentCountry?.name}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#C0A34E] mr-2" />
              <span className="text-2xl font-bold text-white">
                {countryTime.toLocaleTimeString('en-US', {
                  hour12: true,
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZone: currentCountry?.timezone
                })}
              </span>
            </div>
            <div className="text-center mt-1">
              <span className="text-xs text-gray-400">
                {currentCountry?.timezone}
              </span>
            </div>
            <div className="flex items-center justify-center mt-2">
              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-gray-300 text-sm">
                {countryTime.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: currentCountry?.timezone
                })}
              </span>
            </div>

            {/* Next Prayer Indicator */}
            {nextPrayer && currentTimes && (
              <div className="mt-4 p-3 bg-[#C0A34E]/20 rounded-lg border border-[#C0A34E]/30">
                <div className="text-[#C0A34E] text-sm font-medium mb-1">
                  Next Prayer: {nextPrayer}
                </div>
                <div className="text-white font-semibold">
                  {formatTime(currentTimes[nextPrayer])}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Prayer Times Grid */}
        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center py-12"
          >
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C0A34E] mx-auto mb-4"></div>
              <p className="text-white">Loading prayer times...</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {prayerNames.map((prayer, index) => {
              const isCurrentPrayer = currentPrayer === prayer.name;
              const time = currentTimes ? formatTime(currentTimes[prayer.name]) : '--:--';

              return (
                <motion.div
                  key={prayer.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative p-6 rounded-xl border transition-all duration-300 ${
                    isCurrentPrayer
                      ? 'bg-gradient-to-br from-[#C0A34E] to-[#D8B75A] text-[#182F51] shadow-lg scale-105'
                      : 'bg-[#1a3258] backdrop-blur-sm border-[#366AB7]/30 text-white hover:bg-[#366AB7]/20'
                  }`}
                >
                  {isCurrentPrayer && (
                    <div className="absolute -top-2 -right-2 bg-[#366AB7] text-white text-xs px-2 py-1 rounded-full">
                      Current
                    </div>
                  )}

                  <div className="text-center">
                    <div className="flex justify-center mb-4 text-[#C0A34E]">
                      {prayer.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{prayer.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{prayer.arabic}</p>
                    <div className={`text-2xl font-bold ${
                      isCurrentPrayer ? 'text-[#182F51]' : 'text-white'
                    }`}>
                      {time}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-[#1a3258] backdrop-blur-sm rounded-xl p-6 border border-[#366AB7]/30 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Prayer Times Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <Sun className="w-4 h-4 text-[#C0A34E] mr-2" />
                <span>Based on local calculations</span>
              </div>
              <div className="flex items-center justify-center">
                <Moon className="w-4 h-4 text-[#C0A34E] mr-2" />
                <span>Updated daily</span>
              </div>
              <div className="flex items-center justify-center">
                <Star className="w-4 h-4 text-[#C0A34E] mr-2" />
                <span>Multiple locations</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Container>
    </MainLayout>
  );
};

export default PrayerTimes;