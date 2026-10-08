import wave
import math
import struct

sample_rate = 44100
duration = 1.5 # seconds
frequency_start = 120.0
frequency_end = 40.0

obj = wave.open('public/bass-slide.mp3', 'w')
obj.setnchannels(1) # mono
obj.setsampwidth(2)
obj.setframerate(sample_rate)

for i in range(int(sample_rate * duration)):
    t = float(i) / sample_rate
    
    # Exponential frequency decay
    current_freq = frequency_start * ((frequency_end / frequency_start) ** (t / duration))
    
    # Phase accumulation
    phase = 2.0 * math.pi * current_freq * t
    
    # Simple sine wave
    value = math.sin(phase)
    
    # Envelope: quick attack, slow decay
    envelope = math.exp(-t * 2) if t > 0.05 else (t / 0.05)
    
    # Mix with a bit of saturation (tanh-like distortion) for "bass" feel
    val = value * envelope * 2.0
    val = max(min(val, 1.0), -1.0)
    
    data = struct.pack('<h', int(val * 32767.0))
    obj.writeframesraw(data)

obj.close()
