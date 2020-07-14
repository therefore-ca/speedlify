#!/usr/bin/env bash

: ' Bitbucket Pipeline project build - nodejs, composer, terminus

    # exit(s) status code(s)
    1 - file not found

    '

# check if debug flag is set
if [ "${DEBUG}" = true ]; then

  set -x # enable print commands and their arguments as they are executed.
  export # show all declared variables (includes system variables)
  whoami # print current user

else

  # unset if flag is not set
  unset DEBUG

fi

# bash parameters
set -e  #   errexit  - Abort script at first error, when a command exits with non-zero status (except in until or while loops, if-tests, list constructs)
set -u  #   nounset  - Attempt to use undefined variable outputs error message, and forces an exit

# check binaries
__NPM=$(which npm)
__NODE=$(which node)

#PROJECT_ROOT_DIR=$(realpath .)

echo "NPM version"
${__NPM} -v

echo "Node version"
${__NODE} -v

# Run node and build theme.
echo "Site build"
#cd "${PROJECT_ROOT_DIR}"/docroot/themes/ergo
${__NPM} run ci:build

ls -la
