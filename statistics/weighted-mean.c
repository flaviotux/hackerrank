#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

void weighted(int count, int* mean, int* weight, float *result);

int main() {
    int count;
    float result;

    scanf("%d", &count);

    int* mean = malloc(count * sizeof(int));
    int* weight = malloc(count * sizeof(int));

    for (int i = 0; i < count; i++) {
        scanf("%d", &mean[i]);
    }

    for (int i = 0; i < count; i++) {
        scanf("%d", &weight[i]);
    }

    weighted(count, mean, weight, &result);

    printf("%.1f", result);
  
    return 0;
}

void weighted(int count, int* mean, int* weight, float *result) {
    int w_sum = 0, m_sum = 0;

    for (int i = 0; i < count; i++) {
        m_sum += mean[i] * weight[i];
        w_sum += weight[i];

    }

    *result = m_sum / (float)w_sum;
}
