// Some examples are based on Google's SRE book: https://sre.google/workbook/slo-document/
export default [
    {
        title: 'Availability: Synthetic uptime probe',
        description: 'The percentage of successful synthetic probes that do a HTTP GET request to the root endpoint evey minute',
        good: 'ping_response_code == 200',
        isTimeBased: true,
        timeSlot: 60,
    },
    {
        title: 'Availability: Organic traffic uptime',
        description: 'The percentage of successful requests to the endpoint',
        good: '200 ≤ response_code < 500',
        valid: 'inbound',
        unit: 'requests',
    },
    {
        title: 'Availability: Organic purchase flow',
        description: 'The percentage of settled payments out of all orders placed via the website',
        good: 'orders_with_settled_payment',
        valid: 'order_placed_via_website',
        unit: 'orders',
    },
    {
        title: 'Availability: Error Rate',
        description: 'The percentage of authenticated requests that were successful',
        good: 'response_code < 500',
        valid: 'authenticated',
        unit: 'requests',
    },
    {
        title: 'Latency: Response Latency',
        description: 'The percentage of sufficiently fast requests, as measured from the load balancer metrics. "Sufficiently fast" is defined as < 400 ms',
        good: 'response_latency ≤ 400ms',
        valid: 'authenticated',
        unit: 'requests',
    },
    {
        title: 'Latency: Database Query',
        description: 'The percentage of sufficiently fast database queries for a specific query type. "Sufficiently fast" is defined as < 100 ms',
        good: 'query_latency ≤ 100ms',
        valid: 'all insertion queries to the customers table',
        unit: 'insertion queries',
    },
    {
        title: 'Latency: Response 75th Percentile',
        description: 'The percentage of 5m requests where the P75 percentile latency of the requests was sufficiently fast. "Sufficiently fast" is defined as < 800 ms',
        good: 'P75(response_latency, 5m) ≤ 800ms',
        isTimeBased: true,
        timeSlot: 300,
    },
    {
        title: 'Throughput: Worker Efficiency',
        description: 'The number of minutes where an expensive wroker processed enough requests to justify the cost of keeping it alive',
        good: 'sum(rpm, per_worker) > 80',
        unit: 'rpm',
        isTimeBased: true,
        timeSlot: 60,
    },
    {
        title: 'Throughput: Cache hit rate',
        description: 'The number of requests that were responded via the cache storage instead of going to the origin',
        good: 'sum(response_from_cache)',
        valid: 'sum(requests)',
        unit: 'request',
    },
    {
        title: 'Freshness: New Articles',
        description: 'The difference between “Published” timestamp in the browser and “Published” timestamp in the CMS is sufficiently small. "Sufficiently small" is defined as < 1m',
        good: 'published_timestamp_difference ≤ 1m',
        valid: 'all news articles',
        unit: 'articles',
    },
    {
        title: 'Freshness: Article Updates',
        description: 'The difference between “Last Update” timestamp in the browser and “Last Update” timestamp in the CMS is sufficiently small. "Sufficiently small" is defined as < 5m',
        good: 'last_update_timestamp_difference ≤ 5m',
        valid: 'all entertainment articles',
        unit: 'articles',
    },
    {
        title: 'Freshness: Main database table',
        description: 'The proportion of records read from the main database table that were updated recently. "Recently" is defined as within 1 minute. Uses metrics from the API and HTTP server',
        good: 'correct data_requests',
        valid: 'all data_requests',
        unit: 'data_requests',
    },
    {
        title: 'Completeness: Customer data',
        description: 'Percentage of customer records that have the minimum information essential for a productive engagement',
        good: 'sum(customer_records, containing_required_attributes)',
        valid: 'sum(customer_records)',
        unit: 'pipeline runs',
    },
    {
        title: 'Completeness: Game data',
        description: 'The proportion of hours in which 100% of the games in the data store were processed (no records were skipped). Uses metrics exported by the score pipeline',
        good: 'pipeline runs that process 100% of the records',
        valid: 'pipeline runs',
        unit: 'pipeline runs',
    },
    {
        title: 'Consistency: Replication Lag',
        description: 'The percentage of database write events which are repliacated in a sufficiently quick time. "Sufficiently small" is defined as < 1s',
        good: 'replication_lag ≤ 1s',
        valid: 'all database write events',
        unit: 's',
    },
    {
        title: 'Accuracy: Account Information',
        description: 'Percentage of customer records where the account information matches the information acquired via banking API',
        good: 'sum(customer_records, match(customer_record, bank_record, "name" & "accountNr" & "address")',
        valid: 'sum(customer_records)',
        unit: 'records',
    },
    {
        title: 'Consistency: Customer data',
        description: 'Percentage of order records from the order intake system that match those of the orderfulfillment system',
        good: 'sum(match(fulfillment_record, intake_record))',
        valid: 'sum(fulfillment_record)',
        unit: 'order records',
    },
    {
        title: 'Consistency: Cache',
        description: 'Percentage cache entries which match the data in the database. In other words, how many records are updated in the cache after they are created/updated/deleted in the database',
        good: 'sum(match(cache_entry, database_record))',
        valid: 'sum(cache_entry)',
        unit: 'cache entries',
    },
    {
        title: 'Validity: Personnel Data',
        description: 'Percentage of active personnel record where the height information is valid',
        good: 'sum(active_personnel_records, 18 <= person.age <= 65)',
        valid: 'sum(active_personnel_records)',
        unit: 'records',
    },
    {
        title: 'Uniqueness: Profile Pictures',
        description: 'For fraud detection or reducing errors, we want to make sure that no two profiles have the same profile picture.',
        good: 'sum(unique(profile_picture))',
        valid: 'sum(profile_picture)',
        unit: 'profile pictures',
    },
    {
        title: 'Incident Handling Speed',
        description: 'The percentage of highly severe incidents that were resolved sufficiently fast. "Sufficiently fast" is defined as < 30m',
        good: 'time_to_restore ≤ 30m',
        valid: 'Incident Severity == 1 || 2',
        unit: 'incidents',
    },
    {
        title: 'Time To Acknolwledge',
        description: 'The percentage of high priority incidents that were acknowledged sufficiently fast. "Sufficiently fast" is defined as < 5m',
        good: 'time_to_acknowledge ≤ 5m',
        valid: 'Incident Priority == 1',
        unit: 'incidents',
    },
    {
        title: 'MTBF (beta)',
        description: 'The mean time between failures is larger than 7 days',
        good: 'P50(time_between_failures, 30d) ≥ 7 days',
        isTimeBased: true,
        timeSlot: 60,
    },
    {
        title: 'MTTR (beta)',
        description: 'The mean time to restore a service after an incident is less than 30 minutes',
        good: 'P50(time_to_resolution, 30d) ≤ 30m',
        isTimeBased: true,
        timeSlot: 60,
    },
]