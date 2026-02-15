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
      className="container mx-auto px-4 max-w-4xl font-cute pb-10 relative overflow-x-hidden min-h-screen"
    >

      {/* 
          === FOOTER SEPARATION FIX ===
          - Text moved UP (mt-2)
          - Bottom Image moved DOWN (mt-8)
          - Created clear separation between the two.
      */}

      {/* --- HEADER SECTION --- */}
      <header className="relative text-center mb-12 md:mb-20 pt-10 z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative inline-block z-10"
        >
          <h1 className="font-cute font-bold text-4xl md:text-7xl text-cinna-blue mb-2 drop-shadow-sm tracking-tight leading-tight">
            Untuk Izaa<br className="md:hidden" /> Sayang
          </h1>
          <div className="flex justify-center gap-2 text-cinna-pink mt-2">
            <Heart fill="currentColor" size={20} className="md:w-8 md:h-8" />
            <Heart fill="currentColor" size={20} className="md:w-8 md:h-8" />
            <Heart fill="currentColor" size={20} className="md:w-8 md:h-8" />
          </div>
        </motion.div>

        {/* Decoration 1: Header Left */}
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-20 h-20 md:-left-20 md:w-32 md:h-32 z-0 opacity-80"
        >
          <img src="/assets/cinna-deco-1.png" alt="Deco Header" className="w-full h-full object-contain" />
        </motion.div>
      </header>

      {/* --- LETTER SECTION --- */}
      <div className="relative mb-16 md:mb-24">

        {/* Top Right Letter: Cinnamoroll Blue Bow */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -right-2 w-28 h-28 md:-top-24 md:-right-16 md:w-48 md:h-48 z-20"
        >
          <img src="/assets/cinnamoroll-utama.png" alt="Cinnamoroll Blue Bow" className="w-full h-full object-contain drop-shadow-lg" />
        </motion.div>

        {/* Decoration 2: Letter Bottom Right */}
        <motion.div
          animate={{ x: [0, 5, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-3/4 right-0 w-20 h-20 md:top-1/2 md:-right-24 md:w-40 md:h-40 z-0 opacity-80"
        >
          <img src="/assets/cinna-deco-2.png" alt="Deco Letter Bottom" className="w-full h-full object-contain" />
        </motion.div>

        <div className="bg-white/95 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] shadow-[0_15px_40px_-10px_rgba(137,207,240,0.5)] border-4 border-cinna-blue/20 p-6 md:p-14 relative z-10">

          <div className="absolute top-4 left-4 md:top-8 md:left-8 text-cinna-blue/10">
            <Quote size={40} className="md:w-20 md:h-20 rotate-180" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 md:space-y-10 relative z-10 pt-6">
            <h2 className="font-cute font-bold text-2xl md:text-5xl text-cinna-dark flex items-center justify-center gap-2 text-center">
              Surat Kecil dariku
              <img src="https://media.tenor.com/vH6x2pHlDZwAAAAi/cinnamoroll-love.gif" alt="mini cinna" className="w-8 h-8 md:w-12 md:h-12 inline-block pb-1" />
            </h2>

            <div className="font-cute text-sm md:text-xl text-slate-700 leading-relaxed md:leading-[2.2] font-medium text-justify md:text-center tracking-normal">
              <p className="mb-4">
                Iza Sayang, Selamat Hari Valentine.
              </p>
              <p className="mb-4">
                Mungkin banyak orang merayakan hari ini dengan euforia dan pesta, tapi buat aku, hari ini adalah waktu yang tepat untuk bercermin. Aku sadar, selama ini aku seringkali jadi penyebab kamu menghela napas panjang atau bahkan sedih.
                <span className="font-bold text-cinna-blue bg-cinna-light px-1 mx-1 rounded transform -rotate-1 inline-block">Maaf ya, Za,</span>
                kalau selama ini aku egois, kurang peka sama perasaanmu, dan seringkali gagal jadi pendengar yang baik. Aku tahu minta maaf lewat kata-kata itu mudah, tapi aku beneran menyesal karena sudah buat 'awan cerahku' ini jadi redup gara-gara sikapku.
              </p>
              <p className="mb-6">
                Makasih banyak ya sudah sesabar itu menghadapi egoku. Makasih sudah tetap di sini, memegang tanganku meskipun aku sering bikin kamu kesel. Kamu itu alasan aku tersenyum setiap hari, dan aku merasa jadi orang paling beruntung karena punya kamu. Tolong jangan pernah bosan sama aku, ya? Aku janji, pelan-pelan aku akan belajar untuk lebih dewasa dan lebih menghargai setiap detik keberadaanmu.
              </p>
              <p className="font-script text-2xl md:text-5xl text-cinna-blue pt-4 text-center transform -rotate-2 drop-shadow-sm">
                Aku sayang banget sama kamu, lebih dari yang bisa aku tunjukkan.
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-cinna-blue/10">
            <Quote size={40} className="md:w-20 md:h-20" />
          </div>
        </div>
      </div>

      {/* --- VIDEO SECTION --- */}
      <div className="relative mb-16 md:mb-24 px-2">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-6 left-0 w-20 h-20 md:bottom-0 md:-left-20 md:w-48 md:h-48 z-20"
        >
          <img src="/assets/cinna-cupcake.png" alt="Cupcake Video" className="w-full h-full object-contain drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto relative group z-10"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-cinna-pink/90 px-3 py-1 rounded-sm shadow-sm transform -rotate-1">
            <span className="text-white font-cute font-bold tracking-widest text-[10px] md:text-xs uppercase">Our Memory Tape</span>
          </div>

          <div className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-10px_rgba(56,189,248,0.4)] border-4 md:border-8 border-white bg-white ring-2 ring-cinna-blue/10">
            <div className="relative pt-[56.25%] bg-black/5">
              <video
                controls
                className="absolute top-0 left-0 w-full h-full object-cover"
                poster="https://picsum.photos/800/450?blur=2"
                style={{ borderRadius: '1rem' }}
              >
                <source src="/videos/WhatsApp Video 2026-02-15 at 17.31.02.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="py-4 md:py-6 px-4 text-center bg-white">
              <p className="font-cute text-slate-500 font-bold text-sm md:text-xl flex items-center justify-center gap-2">
                <span className="text-cinna-blue">✨</span> Video Spesial Kita <span className="text-cinna-blue">✨</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- GALLERY SECTION --- */}
      <div className="relative mb-24 md:mb-32">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -top-6 right-0 w-16 h-16 md:top-0 md:-right-20 md:w-32 md:h-32 z-0 opacity-80"
        >
          <img src="/assets/cinna-deco-1.png" alt="Deco Gallery" className="w-full h-full object-contain transform scale-x-[-1]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-center mb-6 md:mb-10 relative">
            <h3 className="font-cute font-bold text-3xl md:text-4xl text-cinna-dark mb-2 drop-shadow-sm">Kenangan Kita</h3>
            <div className="flex justify-center items-center gap-2 md:gap-4">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-cinna-blue/40 to-transparent rounded-full"></div>
              <Star fill="#F8C8DC" className="text-cinna-pink w-4 h-4 md:w-6 md:h-6 animate-pulse" />
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-cinna-blue/40 to-transparent rounded-full"></div>
            </div>
            <p className="mt-2 text-slate-400 font-cute text-sm md:text-lg px-4">Kumpulan momen manis yang nggak bakal aku lupa ☁️</p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-3 md:p-8 rounded-[2rem] md:rounded-[3rem] border-2 border-white/60 shadow-inner mx-2">
            <PhotoGallery />
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER SECTION --- */}
      <footer className="text-center pb-20 relative overflow-hidden z-10 mt-12">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block relative z-10"
        >
          <img
            src="https://media.tenor.com/bL1uD_qQOIsAAAAi/cinnamoroll.gif"
            alt="Cinnamoroll Dancing"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto drop-shadow-xl"
          />
        </motion.div>

        {/* TEXT MOVED UP: mt-2 (closer to dancing cinna) */}
        <div className="relative z-10 mt-2 px-4 mb-2">
          <p className="font-script text-3xl md:text-5xl text-cinna-blue drop-shadow-sm">Happy Valentine's Day, Izaa</p>
          <p className="font-cute text-slate-400 mt-2 text-xs md:text-sm">Made with 💙 specially for you</p>
        </div>

        {/* IMAGE MOVED DOWN: mt-8 (pushed away from text) */}
        <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 mx-auto mt-8">
          <motion.img
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            src="/assets/cinna-deco-4.jpg"
            alt="Deco Bottom"
            className="w-full h-full object-contain drop-shadow-xl rounded-full border-4 border-white"
          />
        </div>

        {/* Background Clouds */}
        <div className="absolute bottom-0 left-0 opacity-40 animate-pulse w-24 h-24 md:w-32 md:h-32 pointer-events-none">
          <Cloud fill="#89CFF0" className="w-full h-full text-transparent" />
        </div>
        <div className="absolute top-10 right-10 opacity-40 animate-pulse delay-700 w-20 h-20 md:w-24 md:h-24 pointer-events-none">
          <Cloud fill="#F8C8DC" className="w-full h-full text-transparent" />
        </div>
      </footer>

    </motion.div>
  );
};

export default ValentineCard;