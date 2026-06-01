"use client";

import { type ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RotateCcw, Timer, X } from "lucide-react";
import { useAccent } from "@/components/accent-provider";
import { cn } from "@/lib/utils";

const TEST_DURATION = 30;
const SENTENCES = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes progress one word at a time.",
  "Small habits lead to big results over time.",
  "Clear thinking turns simple ideas into strong work.",
  "Focus on accuracy before you chase pure speed.",
] as const;

function getTypingMetrics(typed: string, target: string) {
  const compareLength = Math.min(typed.length, target.length);
  let correctChars = 0;

  for (let index = 0; index < compareLength; index++) {
    if (typed[index] === target[index]) {
      correctChars += 1;
    }
  }

  const trimmedValue = typed.trimEnd();
  const typedWords = trimmedValue ? trimmedValue.split(/\s+/) : [];
  const targetWords = target.split(/\s+/);
  let correctWords = 0;

  for (let index = 0; index < typedWords.length; index++) {
    const typedWord = typedWords[index];
    const targetWord = targetWords[index];

    if (!targetWord) {
      break;
    }

    const isLastTypedWord = index === typedWords.length - 1;
    const wordComplete =
      !isLastTypedWord || /\s$/.test(typed) || typedWord.length >= targetWord.length;

    if (!wordComplete || typedWord !== targetWord) {
      break;
    }

    correctWords += 1;
  }

  return {
    correctChars,
    correctWords,
    totalCharsTyped: typed.length,
  };
}

export function TypingSpeedDemo() {
  const { accentClassName } = useAccent();
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [completedCorrectChars, setCompletedCorrectChars] = useState(0);
  const [completedTypedChars, setCompletedTypedChars] = useState(0);
  const [completedCorrectWords, setCompletedCorrectWords] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resetTest = useCallback(() => {
    setCurrentSentenceIndex(0);
    setInputValue("");
    setTimeLeft(TEST_DURATION);
    setIsRunning(false);
    setIsFinished(false);
    setCompletedCorrectChars(0);
    setCompletedTypedChars(0);
    setCompletedCorrectWords(0);
  }, []);

  const openDemo = useCallback(() => {
    resetTest();
    setActive(true);
  }, [resetTest]);

  const closeDemo = useCallback(() => {
    setActive(false);
    resetTest();
  }, [resetTest]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(frame);
  }, [active]);

  useEffect(() => {
    if (!active || !isRunning || isFinished) {
      return;
    }

    const interval = window.setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          window.clearInterval(interval);
          setIsRunning(false);
          setIsFinished(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [active, isFinished, isRunning]);

  const handleRestart = useCallback(() => {
    resetTest();
    window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [resetTest]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (isFinished) {
        return;
      }

      const nextValue = event.target.value;
      const currentSentence = SENTENCES[currentSentenceIndex];

      if (!isRunning && nextValue.length > 0) {
        setIsRunning(true);
      }

      if (nextValue === currentSentence) {
        const metrics = getTypingMetrics(nextValue, currentSentence);

        setCompletedCorrectChars((previous) => previous + metrics.correctChars);
        setCompletedTypedChars((previous) => previous + metrics.totalCharsTyped);
        setCompletedCorrectWords((previous) => previous + metrics.correctWords);
        setCurrentSentenceIndex(
          (previous) => (previous + 1) % SENTENCES.length,
        );
        setInputValue("");

        window.requestAnimationFrame(() => {
          inputRef.current?.focus();
        });

        return;
      }

      setInputValue(nextValue);
    },
    [currentSentenceIndex, isFinished, isRunning],
  );

  const currentSentence = SENTENCES[currentSentenceIndex];
  const currentMetrics = getTypingMetrics(inputValue, currentSentence);
  const totalCorrectChars = completedCorrectChars + currentMetrics.correctChars;
  const totalTypedChars = completedTypedChars + currentMetrics.totalCharsTyped;
  const totalCorrectWords = completedCorrectWords + currentMetrics.correctWords;
  const accuracy = totalTypedChars > 0 ? Math.round((totalCorrectChars / totalTypedChars) * 100) : 0;
  const wpm = Math.round(totalCorrectWords / 0.5);

  return (
    <>
      {!active && (
        <button
          onClick={openDemo}
          className="group w-full cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
        >
          <p className="mb-3 text-center text-base font-medium text-muted-foreground">
            Typing Speed
          </p>
          <div className="relative h-40 overflow-hidden rounded-lg bg-muted/50 px-5 py-4">
            <div className="space-y-2 opacity-80">
              <div className="h-2 w-4/5 rounded bg-muted-foreground/20" />
              <div className="h-2 w-full rounded bg-muted-foreground/15" />
              <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <span className="font-mono text-5xl font-semibold tracking-tight text-foreground/80">
                --
              </span>
              <span className="h-10 w-1 animate-pulse rounded-full bg-primary/60" />
            </div>
            <div className="absolute bottom-4 left-5 right-5 space-y-2 opacity-80">
              <div className="h-2 w-full rounded bg-muted-foreground/15" />
              <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
            </div>
          </div>
          <p className="mt-3 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            Click to start
          </p>
        </button>
      )}

      {mounted && active &&
        createPortal(
          <div className={accentClassName}>
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
              onClick={closeDemo}
            >
              <div
                className="relative w-full max-w-xl rounded-2xl border border-border bg-card p-6 shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  onClick={closeDemo}
                  className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Close typing speed test"
                >
                  <X size={18} />
                </button>

                <div className="mb-5 pr-12">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        Typing Speed Test
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        30 second challenge
                      </p>
                    </div>
                    <div
                      className={cn(
                        "flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
                        isRunning
                          ? "border-primary/30 bg-primary/10 text-primary"
                          : "border-border bg-muted/50 text-muted-foreground",
                      )}
                    >
                      <Timer className="h-3.5 w-3.5" />
                      <span>{timeLeft}s</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      Sentence {(currentSentenceIndex % SENTENCES.length) + 1} of {SENTENCES.length}
                    </span>
                    <span>
                      Live WPM {wpm} • Accuracy {accuracy}%
                    </span>
                  </div>

                  <div className="rounded-xl border border-border bg-background/70 p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      <span>Target text</span>
                    </div>
                    <div className="min-h-28 whitespace-pre-wrap break-words font-mono text-base leading-7 text-foreground">
                      {currentSentence.split("").map((character, index) => {
                        const typedCharacter = inputValue[index];
                        const hasTyped = typedCharacter !== undefined;

                        return (
                          <span
                            key={`${character}-${index}`}
                            className={cn(
                              "rounded-sm transition-colors",
                              !hasTyped && "text-muted-foreground/70",
                              hasTyped && typedCharacter === character && "bg-primary/10 text-primary",
                              hasTyped && typedCharacter !== character && "bg-destructive/10 text-destructive",
                            )}
                          >
                            {character === " " ? "\u00A0" : character}
                          </span>
                        );
                      })}
                      {inputValue.length > currentSentence.length && (
                        <span className="rounded-sm bg-destructive/10 text-destructive">
                          {inputValue.slice(currentSentence.length)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={handleChange}
                      disabled={isFinished}
                      rows={4}
                      placeholder="Start typing to begin the timer..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/40 focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-70"
                      aria-label="Typing speed test input"
                      spellCheck={false}
                    />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>
                        {isFinished
                          ? "Time is up — review your score below."
                          : isRunning
                            ? "Keep going until the timer ends."
                            : "Your first keystroke starts the countdown."}
                      </span>
                      <span>{inputValue.length} chars</span>
                    </div>
                  </div>

                  {isFinished && (
                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="rounded-lg border border-border bg-card px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            WPM
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-primary">{wpm}</p>
                        </div>
                        <div className="rounded-lg border border-border bg-card px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Accuracy
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-foreground">
                            {accuracy}%
                          </p>
                        </div>
                        <div className="rounded-lg border border-border bg-card px-4 py-3">
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Correct words
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-foreground">
                            {totalCorrectWords}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleRestart}
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Restart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
