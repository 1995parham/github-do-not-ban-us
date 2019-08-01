def unroll
  yield.each_line { |line| puts line; sleep 0.15 }
end

scroll = %q(
 __________________
/\                 \
\_|                |
  |     2019-07-29 |
  |                |
  |  GitHub        |
  |   is for       |
  |    everyone!   |
  |                |
  |     - krmbzds  |
  |  ______________|_
  \_/_______________/

)

unroll { scroll }
