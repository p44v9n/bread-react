import tapSound1 from "@/assets/sounds/tap1.wav";
import tapSound2 from "@/assets/sounds/tap2.wav";
import tapSound3 from "@/assets/sounds/tap3.wav";
import tapSound4 from "@/assets/sounds/tap4.m4a";
import tapSound5 from "@/assets/sounds/tap5.m4a";

const tapSounds = [tapSound1, tapSound2, tapSound3, tapSound4, tapSound5];

export function playTapSound() {
  const randomIndex = Math.floor(Math.random() * tapSounds.length);
  const src = tapSounds[randomIndex];

  try {
    const audio = new Audio(src);
    // Fire-and-forget; browser may block if not triggered by a user gesture
    // but in our usage this runs inside click handlers.
    void audio.play().catch(() => {
      // Ignore playback errors (e.g. autoplay restrictions)
    });
  } catch {
    // Ignore any construction errors
  }
}


