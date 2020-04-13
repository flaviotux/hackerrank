#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int* bubble_sort(int qty, int* arr);
    void mean(int qty, int* arr);
    void median(int qty, int* arr);
    void mode(int qty, int* arr);

    int qty;
    float result[3];

    scanf("%d", &qty);

    int* arr = malloc(qty * sizeof(int));

    for (int i = 0; i < qty; i++) {
        scanf("%d", &arr[i]);
    }

    int* sorted = malloc(qty * sizeof(int));
    sorted = bubble_sort(qty, arr);

    mean(qty, arr);
    median(qty, sorted);
    mode(qty, sorted);
    
    return 0;
}

int* bubble_sort(int qty, int* arr) {
    int swap;

    for (int i = 0; i < qty - 1; i++) {
        for (int j = i + 1; j < qty; j++) {
            if (arr[j] < arr[i]) {
                swap   = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }


    return arr;
}

void mean(int qty, int* arr) {
    float mean = 0;

    for (int i = 0; i < qty; i++) {
        mean += arr[i];
    }

    printf("%.1f\n", mean / qty);
}

void median(int qty, int* arr) {
    int median;

    if (qty % 2 == 0) {
        median = arr[qty / 2];
        median += arr[(qty / 2) - 1];

        printf("%.1f\n", median / 2.0);
    } else {
        median = qty / 2;
        printf("%d\n", arr[median]);
    }
}

void mode(int qty, int* arr) {
    int maxValue = arr[0],
        max = 0;

   for (int i = 0; i < qty - 1; ++i) {
      int mode = 0;
      
      for (int j = i + 1; j < qty; ++j) {
        if (arr[j] == arr[i]) {
            ++mode;
        }
      }
      
      if (mode > max) {
        max = mode;
        maxValue = arr[i];
      }
   }

   printf("%d\n", maxValue);
}
