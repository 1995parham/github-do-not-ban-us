module Main where

import Control.Monad

-- forever $ putStrLn message
-- but exploiting laziness by producing infinite list in memory
main :: IO ()
main = forM_ messages putStrLn
  where
    message = "GitHub is for everyone"
    messages = const message <$> [0..]
