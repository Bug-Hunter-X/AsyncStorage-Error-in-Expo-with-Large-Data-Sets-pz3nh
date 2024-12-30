# AsyncStorage Error in Expo with Large Data Sets

This repository demonstrates a common error encountered when using AsyncStorage in Expo applications to store large amounts of data.  The error typically manifests as `undefined is not an object (evaluating 'AsyncStorage.setItem')` or a similar error suggesting AsyncStorage is not functioning properly.

The root cause is often exceeding AsyncStorage's limitations with handling large datasets, inefficient data serialization, or issues with data persistence.

**Solution:** The provided `bugSolution.js` offers an alternative approach utilizing MMKV or SQLite to handle large data storage more efficiently. MMKV provides a much better performance compared to AsyncStorage when dealing with larger data.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run the `bug.js` file which attempts to store a large dataset in AsyncStorage resulting in an error.
4. Run the `bugSolution.js` file demonstrates a more efficient solution using MMKV.