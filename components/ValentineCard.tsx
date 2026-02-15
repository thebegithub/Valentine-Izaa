import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Quote, Cloud, Star } from 'lucide-react';
import PhotoGallery from './PhotoGallery';

const ValentineCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 max-w-4xl font-cute pb-24"
    >

      {/* Header Section */}
      <header className="text-center mb-12 relative pt-10">
        {/* Floating Cinnamoroll Top Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 right-0 md:right-20 w-24 h-24 md:w-32 md:h-32 z-0"
        >
          <img
            src="https://media.tenor.com/B9O_e1XQ2TIAAAAj/cinnamoroll.gif"
            alt="Cinnamoroll Heart"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block z-10"
        >
          <h1 className="font-cute font-bold text-5xl md:text-7xl text-cinna-blue mb-2 drop-shadow-sm tracking-tight">
            Untuk Izaa Sayang
          </h1>
          <div className="flex justify-center gap-2 text-cinna-pink">
            <Heart fill="currentColor" size={24} />
            <Heart fill="currentColor" size={24} />
            <Heart fill="currentColor" size={24} />
          </div>
        </motion.div>
      </header>

      {/* Love Letter & Apology Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-[3rem] shadow-[0_20px_60px_-10px_rgba(137,207,240,0.4)] border-4 border-cinna-blue/20 mb-20 p-8 md:p-14 relative overflow-visible">

        {/* Cinnamoroll Peeking on top of letter */}
        <div className="absolute -top-20 left-10 w-32 h-32 hidden md:block z-20">
          <img
            src="https://media.tenor.com/fTTVGyZNtuAAAAAi/cinnamoroll.gif"
            alt="Cinnamoroll Cute"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 text-cinna-blue/10">
          <Quote size={80} className="rotate-180" />
        </div>

        <div className="max-w-2xl mx-auto space-y-10 relative z-10">
          <h2 className="font-cute font-bold text-3xl md:text-5xl text-cinna-dark flex items-center justify-center gap-4 text-center">
            Surat Kecil dariku
            <img src="https://media.tenor.com/vH6x2pHlDZwAAAAi/cinnamoroll-love.gif" alt="mini cinna" className="w-12 h-12 inline-block pb-1" />
          </h2>

          <div className="font-cute text-lg md:text-xl text-slate-700 leading-loose md:leading-[2.5] font-medium text-justify tracking-wide px-4 md:px-0">
            <p className="mb-6 indent-8">
              Iza Sayang, Selamat Hari Valentine.
            </p>
            <p className="mb-6">
              Mungkin banyak orang merayakan hari ini dengan euforia dan pesta, tapi buat aku, hari ini adalah waktu yang tepat untuk bercermin. Aku sadar, selama ini aku seringkali jadi penyebab kamu menghela napas panjang atau bahkan sedih.
              <span className="font-bold text-cinna-blue bg-cinna-light px-2 py-1 rounded-lg mx-1 inline-block transform -rotate-1">Maaf ya, Za,</span>
              kalau selama ini aku egois, kurang peka sama perasaanmu, dan seringkali gagal jadi pendengar yang baik. Aku tahu minta maaf lewat kata-kata itu mudah, tapi aku beneran menyesal karena sudah buat 'awan cerahku' ini jadi redup gara-gara sikapku.
            </p>
            <p className="mb-8">
              Makasih banyak ya sudah sesabar itu menghadapi egoku. Makasih sudah tetap di sini, memegang tanganku meskipun aku sering bikin kamu kesel. Kamu itu alasan aku tersenyum setiap hari, dan aku merasa jadi orang paling beruntung karena punya kamu. Tolong jangan pernah bosan sama aku, ya? Aku janji, pelan-pelan aku akan belajar untuk lebih dewasa dan lebih menghargai setiap detik keberadaanmu.
            </p>
            <p className="font-script text-5xl text-cinna-blue pt-8 text-center transform -rotate-2 drop-shadow-sm">
              Aku sayang banget sama kamu, lebih dari yang bisa aku tunjukkan.
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 text-cinna-blue/10">
          <Quote size={80} />
        </div>
      </div>

      {/* Video Section - Moved Here */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto mb-24 relative group"
      >
        {/* Decorative Tape/Frame Effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-cinna-pink/80 px-4 py-1 rounded-sm shadow-sm transform -rotate-1">
          <span className="text-white font-cute font-bold tracking-widest text-xs">OUR MEMORY TAPE</span>
        </div>

        <div className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(56,189,248,0.5)] border-8 border-white bg-white ring-4 ring-cinna-blue/10">
          <div className="relative pt-[56.25%] bg-black/5">
            <video
              controls
              className="absolute top-0 left-0 w-full h-full object-cover"
              poster="https://picsum.photos/800/450?blur=2"
              style={{ borderRadius: '1.5rem' }}
            >
              <source src="/videos/WhatsApp Video 2026-02-15 at 17.31.02.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="py-6 px-4 text-center bg-white">
            <p className="font-cute text-slate-500 font-bold text-xl flex items-center justify-center gap-2">
              <span className="text-cinna-blue">✨</span> Video Spesial Kita <span className="text-cinna-blue">✨</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Photo Gallery Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-24 relative"
      >
        <div className="text-center mb-12 relative">
          <h3 className="font-cute font-bold text-4xl text-cinna-dark mb-4 drop-shadow-sm">Kenangan Kita</h3>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[3px] w-16 bg-gradient-to-r from-transparent via-cinna-blue/40 to-transparent rounded-full"></div>
            <Star fill="#F8C8DC" className="text-cinna-pink w-6 h-6 animate-pulse" />
            <div className="h-[3px] w-16 bg-gradient-to-r from-transparent via-cinna-blue/40 to-transparent rounded-full"></div>
          </div>
          <p className="mt-4 text-slate-400 font-cute text-lg">Kumpulan momen manis yang nggak bakal aku lupa ☁️</p>
        </div>

        {/* Gallery Container */}
        <div className="bg-white/50 backdrop-blur-sm p-4 md:p-8 rounded-[3rem] border-2 border-white/60 shadow-inner">
          <PhotoGallery />
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="text-center pb-12 relative overflow-hidden">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block relative z-10"
        >
          <img
            src="https://media.tenor.com/bL1uD_qQOIsAAAAi/cinnamoroll.gif"
            alt="Cinnamoroll Dancing"
            className="w-40 h-40 mx-auto drop-shadow-xl"
          />
        </motion.div>

        <div className="relative z-10 mt-6">
          <p className="font-script text-4xl md:text-5xl text-cinna-blue drop-shadow-sm">Happy Valentine's Day, Izaa</p>
          <p className="font-cute text-slate-400 mt-2 text-sm">Made with 💙 specially for you</p>
        </div>

        {/* Background Clouds in Footer */}
        <div className="absolute bottom-0 left-0 opacity-40 animate-pulse w-32 h-32">
          <Cloud fill="#89CFF0" className="w-full h-full text-transparent" />
        </div>
        <div className="absolute top-10 right-10 opacity-40 animate-pulse delay-700 w-24 h-24">
          <Cloud fill="#F8C8DC" className="w-full h-full text-transparent" />
        </div>
      </footer>
    </motion.div>
  );
};

export default ValentineCard;